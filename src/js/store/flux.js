const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allTodos: [
				{ label: "Something to do", frequency: "daily" },
				{ label: "Something else to do", frequency: "weekly" },
				{ label: "Another thing to do", frequency: "monthly" }
			]
		},
		actions: {
			addTodo: (todoLabel, frequency) => {
				setStore({
					allTodos: allTodos.concat({ label: todoLabel, done: false, frequency: frequency })
				});
			},

			// deleteDaily: i => {
			//     var newTodos = this.state.daily.filter((value, ind) => ind !== i);
			//     this.setState({ daily: newTodos });
			// },

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://3000-d840d8e8-fbb7-4e76-994b-47f0e00054f6.ws-us02.gitpod.io/todo/sam")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setTodos(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
