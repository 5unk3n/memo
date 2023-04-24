import WriteMemo from "./WriteMemo.js";
import ShowMemo from "./ShowMemo.js";

class App {
  constructor({ $target }) {
    // $target = main#App
    this.$target = $target;
    this.state = {
      memos: JSON.parse(localStorage.getItem("allMemo")) ?? [],
    };

    const writeMemo = new WriteMemo({
      $target: this.$target,
      state: this.state,
      addMemo: this.addMemo,
    });
    const showMemo = new ShowMemo({
      $target: this.$target,
      state: this.state,
      removeMemo: this.removeMemo,
    });

    this.setState = (newState) => {
      this.state = {
        ...this.state,
        ...newState,
      };
      writeMemo.setState({
        memos: this.state.memos,
      });
      showMemo.setState({
        memos: this.state.memos,
      });
    };
  }

  // 이벤트
  addMemo = (newMemo) => {
    this.setState({ memos: [...this.state.memos, newMemo] });
    localStorage.setItem("allMemo", JSON.stringify(this.state.memos));
  };

  removeMemo = (event) => {
    if (event.target.closest(".remove-btn")) {
      const id = event.target.closest("button").id;
      this.setState({
        memos: this.state.memos.filter((memo) => memo.len !== +id),
      });
      localStorage.setItem("allMemo", JSON.stringify(this.state.memos));
      console.log("삭제됨");
    }
  };
}

export default App;
