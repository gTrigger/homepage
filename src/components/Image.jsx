const Image = (props) => {
    let source = props.logoSource
        ? require(`assets/images/${props.logoSource}`)
        : require('assets/images/placeholder.svg').default;

    return (
        <img src={source}
             alt={props.title}/>
    );
}

export { Image };
