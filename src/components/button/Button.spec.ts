import { render } from '@testing-library/svelte';

import Button from '../button/Button.svelte';

describe('[Button] test', () => {
  test('렌더링 정상 성공 테스트', () => {
    const { getByTestId } = render(Button);
    expect(getByTestId('button')).toBeTruthy();
  });
});
