// 이벤트 전달하는 방법
class ShowMemo {
  constructor({ $target, state, removeMemo }) {
    this.$target = $target;
    this.state = state;
    this.removeMemo = removeMemo;

    this.$element = document.createElement("section");
    this.$element.className = "view-section";
    this.$element.id = "display";
    this.$target.appendChild(this.$element);
    
    this.render();
  }
  
  render() {
    const { memos } = this.state;
    
    this.$element.innerHTML = `
    <section id="display" class="view-section">
    <h2>메모 목록</h2>
    <ol id="memoList" class="memo-list">
    ${memos
      .map(
        (memo) => `
        <li id=memo${memo.len + 1} class="memo-article">
        <p>${memo.len + 1}</p>
        <h2>${memo.title}</h2>
        <p>${memo.content}</p>
        <p>2023. 4. 22. 오후 5:11:20</p>
        <button id=${memo.len + 1} 
        onclick=${this.removeMemo}>삭제</button></li>
        `
        )
        .join("")}
      </ol>
    </section>
  `;
  }
}
// 
// 여기에서 removeMemo()를 넣으니 렌더링 되자마자 실행됨. 원인: 함수가 클래스 생성자에게 전달받은 removeMemo 콜백 함수가 호출된다. 
// 화살표 함수로 함수를 직접 참조하도록 작성했지만 <button id="8" onclick="()" ==""> this.removeMemo()>;삭제</button> 이렇게 나옴
// 원인: 



// 이벤트 선언
addMemo(newMemo) {
  this.setState({ memos: [...this.state.memos, newMemo] });
  localStorage.setItem("allMemo", JSON.stringify(this.state.memos));
}
// 이 코드에서 addMemo는 화살표 함수로 선언해야 this 키워드를 통해 접근해야 한다. 하지만 WirteMemo에서 this.addMemo로 함수를 호출하고 있기 때문에
// 화살표 함수로 변경해서 바인딩 문제를 해결해야한다.