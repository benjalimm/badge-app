
export function ensureAllPropertiesAreDefined<T>(json: any, exampleObject: T): json is T {  
  for (let key of Object.keys(exampleObject)) {
    if (json[key] === undefined) {
      return false 
    }
  }
  return true
}