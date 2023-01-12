enum CacheType {
  Local,
  Session
}

class Cache {
  storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setItem(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    const value = this.storage.getItem(key)
    return (value && JSON.parse(value)) || ''
  }

  removeItem(key: string) {
    this.storage.removeItem(key)
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }
