
function log(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length)
  const string = new TextDecoder('utf8').decode(bytes)
  console.log(string)
}

var memory = new WebAssembly.Memory({ initial : 20 });

const exposed = {
  stdlib: { print: log },
  js: { mem: memory }
}

window.onload = async function main(event) {
  let response = await fetch('hello.wasm')
  let bytes = await response.arrayBuffer()
  let result = await WebAssembly.instantiate(bytes, exposed)
  result.instance.exports.main()
  console.log(result.instance.exports.add(77,88))
}
