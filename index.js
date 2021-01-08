(async () => {
  try {
    document.getElementById("email").href = `${new TextDecoder().decode(
      new Uint8Array(
        (
          await WebAssembly.instantiate(
            Uint8Array.from(
              atob(
                "AGFzbQEAAAABBQFgAAF/AwIBAAUDAQABBxICBWVtYWlsAAAGbWVtb3J5AgAKBgEEAEEACwsjAQBBAAsdbWFpbHRvOmNvbnRhY3RAcHJhamF5YmFzdS5jb20="
              ),
              (A) => A.charCodeAt(0)
            ).buffer
          )
        ).instance.exports.memory.buffer,
        0,
        29
      )
    )}`;
  } catch {}
})();
