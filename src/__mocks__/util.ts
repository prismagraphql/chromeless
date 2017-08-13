import { resolveValue } from '../../utils/test_helper'

export const setViewport = jest.fn(resolveValue())
export const wait = jest.fn(resolveValue())
export const waitForNode = jest.fn(resolveValue())
export const nodeExists = jest.fn(resolveValue(true))
export const scrollToElement = jest.fn(resolveValue())
export const click = jest.fn(resolveValue())
export const type = jest.fn(resolveValue())
export const press = jest.fn(resolveValue())
export const scrollTo = jest.fn(resolveValue())
export const deleteCookie = jest.fn(resolveValue())
export const clearCookies = jest.fn(resolveValue())
export const setHtml = jest.fn(resolveValue())
export const evaluate = jest.fn(resolveValue())
export const setCookies = jest.fn(resolveValue())
export const mousedown = jest.fn(resolveValue())
export const mouseup = jest.fn(resolveValue())
export const focus = jest.fn(resolveValue())
export const clearInput = jest.fn(resolveValue())
export const setFileInput = jest.fn(resolveValue())
export const getValue = jest.fn(resolveValue())
export const pdf = jest.fn(resolveValue('pdf data'))
export const screenshot = jest.fn(resolveValue('image data'))
