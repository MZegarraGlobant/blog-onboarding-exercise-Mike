interface ICustomButton {
  label: string;
  onClick: Function;
}

const CustomButton = ({ label, onClick }: ICustomButton) => {
  return (
    <>
      <button onClick={() => onClick}>{label}</button>
      <style jsx>
        {`
          button {
            box-sizing: border-box;
            width: 8em;
            cursor: pointer;
            display: inline-block;
            text-align: center;
            white-space: nowrap;
            user-select: none;
            font-size: 16px;
            height: 41px;
            line-height: 39px;
            font-weight: 600;
            color: rgb(255, 255, 255);
            padding-left: 24px;
            padding-right: 24px;
            text-decoration: none;
            transition: transform 0.4s ease 0s, background-color, border-color,
              background, color;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(11, 106, 230);
            border-image: initial;
            background: rgb(11, 106, 230);
            border-radius: 25px;
          }
          button:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    </>
  );
};

export default CustomButton;
