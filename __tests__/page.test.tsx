import { expect, describe,it,test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
test('Home', () => {
  render(<Home />);
  //  查找頁面上包含 "Get started by editing" 的文本。這裡使用了正則表達式來匹配文本，其中 /i 是一個修飾符，表示不區分大小寫。
  const headingElement = screen.getByText(/Get started by editing/i);
  // 斷言 headingElement 的 textContent 包含指定的文本 "Get started by editing"。
  // textContent 屬性獲取元素的純文本內容。toContain 方法用於確認該文本內容中包含了預期的字符串。
  expect(headingElement.textContent).toContain('Get started by editing');
})

describe('Home Page', () => {
  it('renders the heading', () => {
     render(<Home />);
    const logos = screen.getAllByAltText(/Next\.js Logo/i);
    expect(logos[0].getAttribute('alt')).toBe('Next.js Logo');
  });
});

//在 React 測試中，render 可以被理解為 mount 的一種形式。render 來自於 @testing-library/react，它將 React 元件渲染到一個虛擬的 DOM 中，以便進行測試。與之相對的是 Enzyme 的 mount，它也會渲染整個組件樹，包括子組件。
// test 和 it 在功能上是相同的，都是用來定義測試用例的。這兩者的選擇通常是基於個人或團隊的習慣。
// test: 用於定義測試用例，語義上比較直觀，常見於許多測試框架中。
// it: 用於描述測試用例的行為，通常和 describe 結合使用，可以使測試用例的描述更加自然。
