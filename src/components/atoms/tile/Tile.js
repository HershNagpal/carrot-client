import styled from 'styled-components';

export const Tile = styled.div`
    font-size: 5vh;
    justify-content: center;
    color: black;
    height: 5.8vh;
    width: 5.8vh;
    border: 0.1vh solid mediumseagreen;
    pointer-events: all;
    background-color: lightgreen;
    background-image: url(${props => props.backgroundImage});
    background-size: 100%;
`;

/*
const unstyledTile = ({type, hp, maxHp}) => {
    const classes = useStyles();
    const game = useSelector((state) => state.game);
    const [icon, setIcon] = useState('grass');
    const [isMouseOver, setMouseOver] = useState(false);
    const [isEntityWithHp, setIsEntityWithHp] = useState(false);

    useEffect(() => {
        switch (type) {
            case 'grass':
                setIcon(grassIcon);
                setIsEntityWithHp(false);
                break;
            case 'player':
                setIsEntityWithHp(true);
                switch (game.direction) {
                    case 'd':
                        setIcon(playerRightIcon);
                        break;
                    case 'a':
                        setIcon(playerLeftIcon);
                        break;
                    case 'w':
                        setIcon(playerUpIcon);
                        break;
                    case 's':
                        setIcon(playerDownIcon);
                        break;
                    default:
                        break;
                }
                break;
            case 'carrot':
                setIcon(carrotIcon);
                setIsEntityWithHp(false);
                break;
            case 'wolf':
                setIcon(wolfIcon);
                setIsEntityWithHp(true);
                break;
            case 'fence':
                setIcon(fenceIcon);
                setIsEntityWithHp(true);
                break;
            case 'tree':
                setIcon(treeIcon);
                setIsEntityWithHp(true);
                break;
            default:
                setIcon(grassIcon);
                setIsEntityWithHp(false);
        }
    }, [type, game]);

    return <>
        <div className={classes.tile} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
            {(hp < maxHp || (isMouseOver && isEntityWithHp)) && <HealthBar currentInfo={{value:hp, max:maxHp}} />}
            
            <img className={classes.icon} src={icon} alt={icon}></img>
        </div>
    </>
};
*/