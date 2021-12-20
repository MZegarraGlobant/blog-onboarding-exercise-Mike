type IProps = {
  children: JSX.Element;
};

function HomePageStyles(props: IProps) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        body {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default HomePageStyles;
