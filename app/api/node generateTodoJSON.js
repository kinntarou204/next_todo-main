const fs = require('fs');

// 自分の学生番号とTODOリストのデータ
const studentNumber = "YourStudentNumber";
const todos = [
    { id: 1, title: "Study for exam", completed: false },
    { id: 2, title: "Complete project", completed: true },
    { id: 3, title: "Attend meeting", completed: false }
];

// タグを学生番号に設定する
const tags = [studentNumber];

// TODOリストに学生番号を追加する
const todosWithStudentNumber = todos.map(todo => {
    return {
        ...todo,
        studentNumber: studentNumber
    };
});

// 最終的なJSONデータを作成する
const jsonData = {
    tags: tags,
    todos: todosWithStudentNumber
};

// JSONデータをファイルに書き込む
fs.writeFileSync('todo.json', JSON.stringify(jsonData, null, 2));

console.log('todo.jsonファイルが生成されました。');