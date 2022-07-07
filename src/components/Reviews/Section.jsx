export default function Section(props)  {
    const { title, children } = props;
  
      return (
        <div>
          <h2>{title}</h2>
          {children}
        </div>
      );
  };