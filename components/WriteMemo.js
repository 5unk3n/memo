class WriteMemo {
  /**
   * @param {HTMLElement} $target - 요소 추가할 부모 요소
   * @param {Object} state - 상태
   * @param {Function} addMemo - 메모 추가하는 함수
   */
  constructor({ $target, state, addMemo }) {
    this.$target = $target;
    this.state = state;
    this.addMemo = addMemo;

    this.$target.addEventListener("submit", (e) => {
      e.preventDefault();
      const memos = this.state.memos;
      addMemo({
        id: memos.length ? memos[memos.length - 1].id + 1 : 1,
        title: this.$target.querySelector(".write-title").value,
        content: this.$target.querySelector(".write-content").value,
        date: new Date().toLocaleString(),
      });
    });

    this.render();
  }

  render = () => {
    this.$target.innerHTML = `
      <h2 class="section-title">📝메모 작성</h2>
      <form class="memo-write">
        <label class="a11y-hidden" for="writeTitle">제목 작성</label>
        <input
          type="text"
          id="writeTitle"
          class="write-title"
          placeholder="제목"
          required
        />
        <label class="a11y-hidden" for="writeContent">내용 작성</label>
        <textarea
          id="writeContent"
          class="write-content"
          rows="14"
          placeholder="내용"
        ></textarea>
        <button type="submit" class="write-button"">메모 추가</button>
      </form>
    `;
  };
}

export default WriteMemo;
