import classNames from 'classnames';
import useNavigation from '../../hooks/use-navigation';

function Link({to, children}) {
    const {navigate} = useNavigation();

    const classes = classNames('text-blue-500')

    const handleClick = (e)=>{
        if(e.metaKey || e.ctrlKey) { //let User to open link pressing Ctrl key or Command Key
            return;
        }
        e.preventDefault();
        navigate(to);
    };


  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
};

export default Link