import React, { useState, useEffect } from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import styles from "@styles/Home.module.scss"
import Link from 'next/link'

const Index: NextPage = () => {
    // 型定義======
    type Todo = {
        id: number;
        title: string;
        editMode: boolean;
        enabled: boolean;
    }

    // サンプル=======
    const sampleTodoList = [
        { id: 0, title: 'React参考書読む', editMode: false, enabled: true },
        { id: 1, title: 'Laravel環境構築', editMode: false, enabled: true },
        { id: 2, title: 'インフラ勉強', editMode: false, enabled: true },
    ];

    // 状態管理=======
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState('');
    const [editText, setEditText] = useState('');
    const [flashMessages, setFlashMessages] = useState({ todoTitle: '', message: '' });
    const [isShowMessage, setIsShowMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // 表示モード切り替え=======
    const enableEditState = (id: number) => {
        setTodoList(todoList.map((todo) => todo.id === id ? { id: todo.id, title: todo.title, editMode: true, enabled: todo.enabled } : todo));
    }
    const disableEditState = (id: number) => {
        setTodoList(todoList.map((todo) => todo.id === id ? { id: todo.id, title: todo.title, editMode: false, enabled: todo.enabled } : todo));
    }

    // 追加・取消の表示切り替え========
    const [buttonState, setButtonState] = useState('plus');
    const enableMinusButton = () => {
        setButtonState('minus');
    }
    const enablePlusButton = () => {
        setButtonState('plus');
    }

    // 登録処理=======
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    // IDの自動連番
    let nextId = todoList.length;

    const addTodo = () => {
        const newTodo: Todo = {
            id: nextId,
            title: inputText,
            editMode: false,
            enabled: true,
        }
        setTodoList([...todoList, newTodo]);
        setInputText('');
        nextId++;
        console.log(todoList);
    };

    useEffect(() => {
        console.log('test');
    }, []);

    //useEffect(() => {
    //    setTimeout(() => {
    //        setTodoList(sampleTodoList);
    //        setIsLoading(false);
    //    }, 1000);
    //}, []);

    //useEffect(() => {
    //    if (todoList.length === 0) return;
    //    console.log(todoList);
    //    setIsShowMessage(true);
    //    setTimeout(() => {
    //        setIsShowMessage(false);
    //    }, 500);
    //}, [todoList]);

    const handleChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value);
    }

    // 更新処理=======
    const updateTodo = (id: number) => {
        setTodoList((prevTodo) => prevTodo.map((todo) => todo.id === id ? { id: todo.id, title: editText, editMode: false, enabled: todo.enabled } : todo));
        setFlashMessages({ todoTitle: editText, message: 'が更新されました！' });
        setEditText('');
    }

    // 削除処理=======
    const disableTodo = (id: number, title: string) => {
        const todoTitle = title;
        setTodoList(todoList.map((todo) => todo.id === id ? { id: todo.id, title: todo.title, editMode: todo.editMode, enabled: false } : todo));
        setFlashMessages({ todoTitle: todoTitle, message: 'が削除されました！' });
    };

    return (
        <div>
            <Head>
                <title>TODO</title>
                <meta name="description" content="これはTODO作成アプリです。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <p className={styles.title}>TODOリスト</p>
            </header>
            <main>
                {buttonState === 'plus' ?
                    <div>
                        <Button
                            onClick={enableMinusButton}
                            className={styles.show}>追加
                        </Button>
                    </div>
                    :
                    <div>
                        <Button
                            onClick={enablePlusButton}
                            className={styles.hide}>
                            取消
                        </Button>
                    </div>
                }
                {isLoading && <p>Loading...</p>}
                {isShowMessage && <p>登録されました！</p>}
                {(buttonState === 'minus') &&
                    <div>
                        <form>
                            <Input
                                type="text"
                                value={inputText}
                                onChange={handleChangeInput}
                                className={styles.input}
                                required />
                            <Button
                                disabled={inputText === ""}
                                onClick={() => addTodo()}
                                className={styles.primary}>
                                登録
                            </Button>
                        </form>
                    </div>
                }
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>タイトル</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map((todo) => todo.enabled &&
                                <tr key={todo.id}>
                                    {(todo.editMode) ?
                                        <>
                                            <td colSpan={3}>
                                                <form
                                                    action="">
                                                    <Input
                                                        type="text"
                                                        value={editText}
                                                        onChange={handleChangeEdit}
                                                        className={styles.input}
                                                        required />
                                                    <Button
                                                        disabled={editText === ""}
                                                        onClick={() => updateTodo(todo.id)}
                                                        className={styles.primary}>
                                                        更新
                                                    </Button>
                                                </form>
                                                <Button
                                                    onClick={() => disableEditState(todo.id)}
                                                    className={styles.tertiary}>
                                                    取り消し
                                                </Button>
                                            </td>
                                        </>
                                        :
                                        <>
                                            <td>{todo.title}</td>
                                            <td>
                                                <Button
                                                    onClick={() => enableEditState(todo.id)}
                                                    className={styles.primary}>
                                                    編集
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    onClick={() => disableTodo(todo.id, todo.title)}
                                                    className={styles.secondary}>
                                                    削除
                                                </Button>
                                            </td>
                                        </>
                                    }
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main >
            <footer>
                <div>
                    詳しくは
                    <Link
                        href="/todo/details"
                        className={styles.link}>こちら</Link>
                    をクリックしてください。
                </div>
            </footer>
        </div >
    );
};

export default Index;
