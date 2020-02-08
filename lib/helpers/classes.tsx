function classes(...names:(string|undefined)[]) {
  console.log(names)
  return names.filter(x=>x).join(' ')
}

export default classes
