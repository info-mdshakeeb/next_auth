const lcStorage = () => {
  const solve = typeof window !== 'undefined' && localStorage
  const set = (key, value) => solve && localStorage.setItem(key, JSON.stringify(value))
  const get = (key) => solve && JSON.parse(localStorage.getItem(key));
  const remove = (key) => solve && localStorage.removeItem(key)
  return { set, get, remove }
}

export default lcStorage;