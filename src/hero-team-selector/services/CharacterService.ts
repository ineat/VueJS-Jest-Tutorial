export function fetchHeroes() {
  return fetch("http://localhost:8080/hero");
}

export function fetchWicked() {
  return fetch("http://localhost:8080/wicked");
}
