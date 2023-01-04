import { React } from 'react';
import { Avatar, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/styles';
import CardChat from './CardChat'

const { Search } = Input;

const useStyles = makeStyles((theme) => ({
    avatar: {
        display: 'flex',
        margin: "20px 5px 20px 5px"
    },
    inputSearch: {
        display: 'flex',
        margin: "0px 5px 40px 5px"
    },
    nameUser: {
        margin: "10px 0px 0px 10px"
    },
    cardChatRoom: {

    }
}));


const ListRoom = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.avatar}>
                <Avatar icon={<UserOutlined />} />
                <span className={classes.nameUser}>Name</span>
            </div>
            <div className={classes.inputSearch}>
            <Search placeholder="Input Name" enterButton />
            </div>
            <div className={classes.cardChatRoom}>
                <CardChat />
                <CardChat />
                <CardChat />
                <CardChat />
                <CardChat />
            </div>
        </>
    );
}

export default ListRoom;