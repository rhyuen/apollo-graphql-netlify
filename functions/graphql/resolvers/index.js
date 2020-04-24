let todoIndex = 0;
const todos = {
    "key-1000": {
        id: "1000",
        text: "some text",
        done: false
    }
}

const resolvers = {
    Query: {
        todos: () => {
            return Object.values(todos);
        }
    },
    Mutation: {
        addTodo: (_, { text }) => {
            todoIndex++;
            const id = `key-${todoIndex}`;
            todos[id] = { id, text, done: false };
        },
        updateTodoDone: (_, { id }) => {
            todos[id].done = true;
            return todo[id];
        }
    }
};


module.exports = resolvers;