import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px;
  width: 600px;
  height: 300px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(180deg, #ff69b4, #c71585);
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);

  & div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  font-size: 20px;
  font-family: FANTASY;
  font-weight: 700;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #ffb6c1 0%, #db7093 100%);
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
    0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
    inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  padding: 0 15px;
  border-radius: 0.3em;
  color: #fff;
  height: 2em;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
      0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #db7093;
    transform: translateY(-0.1em);
  }

  &:active {
    box-shadow: inset 0px 0.1em 0.6em #db7093;
    transform: translateY(0em);
  }
`;

// export const NewContButton = styled.button`
//   display: block;
//   width: 100%;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 20px;
//   font-size: 20px;
//   font-family: FANTASY;
//   font-weight: 700;
//   display: inline-block;
//   outline: 0;
//   border: 0;
//   cursor: pointer;
//   will-change: box-shadow, transform;
//   background: radial-gradient(100% 100% at 100% 0%, #ffb6c1 0%, #db7093 100%);
//   box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
//     0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
//     inset 0px -0.01em 0px rgb(58 65 111 / 50%);
//   padding: 0 15px;
//   border-radius: 0.3em;
//   color: #fff;
//   height: 3em;
//   text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
//   transition: box-shadow 0.15s ease, transform 0.15s ease;

//   &:hover {
//     box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
//       0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #db7093;
//     transform: translateY(-0.1em);
//   }

//   &:active {
//     box-shadow: inset 0px 0.1em 0.6em #db7093;
//     transform: translateY(0em);
//   }
// `;