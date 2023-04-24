class ShowMemo {
  /**
   * @param {HTMLElement} $target - 요소 추가할 부모 요소
   * @param {Object} state - 상태
   * @param {Function} removeMemo - 메모 삭제 함수
   */
  constructor({ $target, state, removeMemo }) {
    this.$target = $target;
    this.state = state;
    this.removeMemo = removeMemo;

    this.$element = document.createElement("section");
    this.$element.className = "view-section";
    this.$target.appendChild(this.$element);

    this.$element.addEventListener("click", (e) => this.removeMemo(e));

    this.render();
  }

  setState = (newState) => {
    this.state = newState;
    this.render();
  };

  render() {
    const { memos } = this.state;

    this.$element.innerHTML = `
      <h2 class="section-title">메모 목록</h2>
      <ol id="memoList" class="memo-list">
      ${memos
        .map(
          (memo) => `
        <li id=memo${memo.len + 1} class="memo-article">
        <p>${memo.len + 1}</p>
        <h2>${memo.title}</h2>
        <p>${memo.content}</p>
        <p>${memo.date}</p>
        <button id=${memo.len} class="remove-btn">삭제</button></li>
      `
        )
        .join("")}
      </ol>
    `;
  }
}

export default ShowMemo;

/**
 * app이랑 초기상태를 받아
 * target이라는 요소를 만들고
 * app에 target달아주기
 *
 * state 변경시 상태 변경, 리렌더
 *
 * 렌더링은 타겟의 HTML을
 */

// html요소중 id 속성이 있는 요소는 map을 사용할 때 ""로 고정해줘야함
