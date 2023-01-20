export const searchClassTree = (className: string, elementBase: HTMLElement) => {
  let target = elementBase
  let isValid = false
  let validTarget = elementBase
  do {
    isValid = target.classList.length > 0 ? target.classList.contains(className) : false
    if (isValid) {
      validTarget = target
    }
    target = target.parentElement as HTMLElement
  } while (!isValid)

  return validTarget
}
