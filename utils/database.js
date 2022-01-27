import { MongoCLient } from "mongodb";

let client;

export async function connectDatabase(url) {
	client = new Mongoclient(url);
	await client.connect();
}

export function getToDoCollection() {
	return client.db().collection("todos");
}

// Alternate functions with more modularity

/*export function getCollection(name) {
	return client.db().collection(name)
}

export function getTodoCollection() {
	return getCollection('todos')
}

export function getUserCollection() {
	return getCollection('users')
}*/
