import WriteMemo from "./WriteMemo.js";
import ShowMemo from "./ShowMemo.js";

class App {
  constructor({ $target }) {
    // $target = main#App
    this.$target = $target;
    this.state = {
      memos: JSON.parse(localStorage.getItem("allMemo")) ?? [],
    };

    this.render();
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <section class="write-section"></section>
    <section class="view-section"></section>
    `;

    new WriteMemo({
      $target: this.$target.querySelector(".write-section"),
      state: this.state,
      addMemo: this.addMemo.bind(this),
    });
    new ShowMemo({
      $target: this.$target.querySelector(".view-section"),
      state: this.state,
      removeMemo: this.removeMemo.bind(this),
    });
  }

  addMemo(newMemo) {
    this.setState({
      memos: [...this.state.memos, newMemo],
    });
    localStorage.setItem("allMemo", JSON.stringify(this.state.memos));
  }

  removeMemo(id) {
    this.setState({
      memos: this.state.memos.filter((memo) => memo.id !== +id),
    });
    localStorage.setItem("allMemo", JSON.stringify(this.state.memos));
  }
}

export default App;
