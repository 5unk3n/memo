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

    // 요소 생성후 $target에 추가
    this.$element = document.createElement("section");
    this.$element.className = "write-section";
    this.$target.appendChild(this.$element);

    this.$element.addEventListener("submit", (e) => {
      e.preventDefault();
      addMemo({
        title: this.$element.querySelector(".write-title").value,
        content: this.$element.querySelector(".write-content").value,
        date: new Date().toLocaleString(),
        len: this.state.memos.length,
      });
    });

    this.render();
  }

  setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  render = () => {
    this.$element.innerHTML = `
      <h2 class="section-title">📝메모 작성</h2>
      <form class="memo-write">
        <label class="a11y-hidden" for="writeTitle">제목 작성</label>
        <input
          type="text"
          id="writeTitle"
          class="write-title"
          placeholder="제목"
        />
        <label class="a11y-hidden" for="writeContent">내용 작성</label>
        <textarea
          id="writeContent"
          class="write-content"
          rows="20"
          placeholder="내용"
        ></textarea>
        <button type="submit" class="write-button"">+</button>
      </form>
    `;
  };
}

export default WriteMemo;
