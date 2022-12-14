const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			planets:[],
			films:[],
			specie:[],
			naves:[],
			vehiculos:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/people")
				.then((res)=> res.json())
				.then((data)=> setStore({people:data.results}))

				fetch("https://www.swapi.tech/api/planets")
				.then((res)=> res.json())
				.then((data)=> setStore({planets:data.results}))

				fetch("https://www.swapi.tech/api/films/")
				.then((res)=> res.json())
				.then((data)=> setStore({films:data.results}))
				
				fetch("https://www.swapi.tech/api/species/")
				.then((res)=> res.json())
				.then((data)=> setStore({specie:data.results}))
				
				fetch("https://www.swapi.tech/api/starships/")
				.then((res)=> res.json())
				.then((data)=> setStore({naves:data.results}))

				fetch("https://www.swapi.tech/api/vehicles/")
				.then((res)=> res.json())
				.then((data)=> setStore({vehiculos:data.results}))
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
