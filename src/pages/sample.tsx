import type { NextPage } from 'next';
import { Dispatch, FC, useState, createContext, useContext } from 'react';

// Redux: 状態管理を簡素化するもの、大規模だと使う事が多い
// Dispatch：状態管理の一つの概念
// Hooks：中小規模なら使えるかも

type TodoType = {
    id: number
    title: string
}

type CardType = {
    todo: TodoType
    todoList: TodoType[]
    setTodoList: Dispatch<TodoType[]>
}

type FormType = {
    todoList: TodoType[]
    setTodoList: Dispatch<TodoType[]>
}

// ④表示・処理
const Card: FC<CardType> = ({ todo, todoList, setTodoList }) => {
    const [canInput, setCanInput] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const { todoList: todos, setTodoList: setTodos } = useContext(TodoContext);
    console.log('todos: ', todos);

    const onUpdate = (id: number, _title: string) => {
        setTitle(title);
        todoList.map((todo: TodoType) => {
            if (todo.id === id) todo.title = title;
            return todo;
        });
        setTodoList(todoList);
    };

    return (
        <div onClick={(e) => setCanInput(e.target !== e.currentTarget)}>
            {!canInput && <p>{todo.title}</p>}
            {canInput && <input value={todo} onInput={(e) => onUpdate(todo.id, e.target.value)} />}
            <button onClick={() => setTodoList(todoList.filter(_todo => _todo.id !== todo.id))}>Delete</button>
        </div>
    );
};



const Form: FC<FormType> = ({ todoList, setTodoList }) => {
    const [title, setTitle] = useState('');
    const onSubmit = () => {
        setTodoList([...todoList, { id: todoList.length + 1, title: title }]);
        setTitle('');
    };

    return (
        <>
            <input value={title} onInput={(e) => setTitle(e.target.value)} />
            <button onClick={() => onSubmit()}>SAVE</button>
        </>
    );
};


type TodoStateType = {
    todoList: TodoType[],
    setTodoList?: Dispatch<TodoType[]>,
};

const TodoContext = createContext<TodoStateType>({
    todoList: [],
    setTodoList: () => { },
});

// ①レイアウト
// ②状態管理について検討（①どのスコープで状態管理をするか、②useState, useContext, useReducerのうちどれを採用するか）
// ③コンポーネント内でどういう状態が理想か？を検討
const Home: NextPage = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            <div>
                <ul>
                    {todoList.map((todo: TodoType) => (
                        <li key={todo.id}><Card todo={todo} todoList={todoList} setTodoList={setTodoList}></Card></li>
                    ))}
                </ul>
                <Form todoList={todoList} setTodoList={setTodoList}></Form>
            </div>
        </TodoContext.Provider>
    );
};

export default Home;
