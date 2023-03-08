const Card = ({ text }) => {
  console.log("Card 렌더링!!");
  return (
    <section>
      <h2>Card</h2>
      <p>카드의 값 : {text}</p>
      <button className="asdfdsa" disabled>
        버튼
      </button>
    </section>
  );
};

export default Card;
