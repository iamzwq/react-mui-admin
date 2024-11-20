/**
 * 绑定事件
 * @example
 * on(window, 'scroll', () => {});
 */
export const on = <T extends EventTarget, A extends any[]>(obj: T, ...args: A) => {
  // @ts-ignore
  if (obj && obj.addEventListener) obj.addEventListener(...args);
};

/**
 * 解绑事件
 * @example
 * off(window, 'scroll', () => {});
 */
export const off = <T extends EventTarget, A extends any[]>(obj: T, ...args: A) => {
  // @ts-ignore
  if (obj && obj.addEventListener) obj.removeEventListener(...args);
};
