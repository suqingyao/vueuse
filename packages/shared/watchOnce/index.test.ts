import { describe, expect, it, vi } from 'vitest'
import { nextTick, shallowRef } from 'vue'
import { watchOnce } from './index'

describe('watchOnce', () => {
  it('should work', async () => {
    const num = shallowRef(0)
    const spy = vi.fn()

    watchOnce(num, spy)
    num.value = 1
    await nextTick()
    num.value = 2
    await nextTick()
    expect(spy).toBeCalledTimes(1)
  })
})
