export default function getOrCreateUUID() {
  // check if uuid exists
  const uuidCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('user_uuid='))

  if (uuidCookie) {
    // extract uuid
    return uuidCookie.split('=')[1]
  } else {
    // generate new uuix
    const newUUID = crypto.randomUUID()
    document.cookie = `user_uuid=${newUUID}; path=/; max-age=31536000; SameSite=Lax`
    return newUUID
  }
}
