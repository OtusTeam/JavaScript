
a();

function a() {
  return b()
}

function b() {
  return c()
}

function c() {
  throw new Error('error c')
}

;(async() => {
  await aAsync();
})()

async function aAsync() {
  return await bAsync()
}

async function bAsync() {
  return await cAsync()
}

async function cAsync() {
  await delay();

  throw new Error('error c async')
}

function delay() {
  return new Promise(res => {
    setTimeout(res, 1000)
  })
}
