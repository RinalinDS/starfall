import { describe, it, expect } from 'vitest';
import { useModalControls } from '../useModalControls';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

describe('useModalControls behaviour testing', () => {
  it('useModalControl default behaviour', () => {
    const { result } = renderHook(() => useModalControls());

    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.closeModal).toBeInstanceOf(Function);
    expect(result.current.openModal).toBeInstanceOf(Function);
  });

  it('useModalControl changes outcome after functions call', () => {
    const { result } = renderHook(() => useModalControls());

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isOpen).toBeTruthy();

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBeFalsy();
  });
});
