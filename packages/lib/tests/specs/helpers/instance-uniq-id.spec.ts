import { useInstanceUniqId } from '@package/composables'
import { getCurrentInstance } from 'vue'

let instance: ReturnType<typeof useInstanceUniqId>

beforeEach(() => {
  instance = useInstanceUniqId({
    componentName: 'MazInput',
    instance: {
      uid: 2,
    } as ReturnType<typeof getCurrentInstance>,
    providedId: undefined,
  })
})

afterAll(() => {
  instance = undefined
})

test('helpers/useInstanceUniqId', () => {
  expect(instance.instanceId).toBeDefined()
  expect(instance.instanceId.value).toBe('MazInput-2')
})
