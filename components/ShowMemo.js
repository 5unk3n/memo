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

    this.$target.addEventListener("click", (e) => {
      if (e.target.closest(".remove-btn")) {
        this.removeMemo(e.target.id);
      }
    });

    this.render();
  }

  render() {
    const { memos } = this.state;

    this.$target.innerHTML = `
      <h2 class="section-title">메모 목록</h2>
      <ol id="memoList" class="memo-list">
      ${memos
        .map(
          (memo) => `
        <li id=memo${memo.id} class="memo-article">
        <p class="memo-id">${memo.id}번째 메모</p>
        <h2 class="memo-title">${memo.title}</h2>
        <p class="memo-content">${memo.content}</p>
        <p class="memo-date">${memo.date}</p>
        <button id=${memo.id} class="remove-btn">삭제</button></li>
      `
        )
        .join("")}
      </ol>
    `;
  }
}

export default ShowMemo;
