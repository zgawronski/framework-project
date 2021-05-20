import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';
import { ExpandedFollowedMenu } from './ExpandedFollowedMenu';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getComments } from '../../actions/usersActions';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';

type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>

const WrapperR = styled(Wrapper)`
    display: block;
    position: relative;
    width: 970px;
    //overflow: hidden;
    margin: 10px;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
    .pagination {
        display: flex;
        position: relative;
        justify-content: center;
        color: ${Colors.blue};
        cursor: pointer;
        background-color: ${Colors.white};
        .active {
            color: ${Colors.black};
            padding: 5px;
        }
        .break-me{
            padding: 5px;
        }
        .page{
            padding: 5px;
        }
        .next{
            padding: 5px;
        }
        .previous{
            padding: 5px;
        }
    }
`;


const MainTitle = styled.h1`
    margin-left: 20px;
    color: ${Colors.black};
    font-size: ${fontSize[22]};
    font-weight: 600;
`;

const MainBlocks = styled.div`
    display: block;
    width: 950px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px ${Colors.lightgrey};
    margin-left: auto;
    margin-right: auto;
    h3{
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        font-weight: 600;
        margin-bottom: 10px;
    }

`;


const CustomInput = styled.input`
    width: 250px;
    padding: 5px;
    border: none;
    border-radius: 3px;
    &:hover {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

const FollowDiv = styled.div`
    display: flex;
    position: relative;
    color: ${Colors.blue};
    p{
        margin-right: 5px;
    };
`;

const SearchDiv = styled.div`
    position: relative;
    display: flex;
    margin-left: auto;
    margin-right: 20px;
    border: 1px solid ${Colors.grey};
    border-radius: 3px;
`;

const WorkContainer = styled.div`
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: ${Colors.white};
    img{
        max-width: 20px;
        max-height: 20px;
        padding: 5px
    }
`;

const FDiv = styled.div`
    display:flex;
    margin-top: 10px;
    font-family: sans-serif;
    font-size: ${fontSize[14]};
    img{
        width: 15px;
        height: 15px;
        margin-right: 5px;
        margin-left: 5px;
    }
    p{
        margin-right: 5px;
        margin-left: 5px;
    }
    div{
        display:flex;
    }
`;

export const ResumeYourWork: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    const { usersComment } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [posts, setPosts] = useState<any>([]);


    const [inputText, setInputText] = useState<any>("");
    const [currentPage, setCurrentPage] = useState<number>(0);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
        setPosts(usersComment);
    }, [dispatch, usersComment]);



    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const text:string = e.target.value;
        setInputText(text);

    }

    const handlePageClick = (data:any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }

    const currentPosts = posts.slice(currentPage, currentPage +10);

    return (
        <WrapperR>
            <TitleContainer>
                <MainTitle>Resume your work</MainTitle>
                <SearchDiv>
                    <CustomInput type="text" placeholder="Filter by title..." value={inputText} onChange={inputHandler}></CustomInput>
                    <img src="./media/icons/search.svg" alt=""/>
                </SearchDiv>
                <FollowDiv ref={wrapperRef}>
                    <p onClick={menuHandler}>Followed</p>
                    <img onClick={menuHandler} src="./media/icons/arrow-down.svg" alt=""/>
                    {dropdownOpen &&
                        <ExpandedFollowedMenu />
                    }
                </FollowDiv>
            </TitleContainer>
            <WorkContainer>
                {inputText === "" ? currentPosts.map((us: any) =>{
                    return(
                        <MainBlocks key={us.id}>
                            <h3>{us.name.charAt(0).toUpperCase()+us.name.slice(1)}</h3>

                            <p>{us.body.charAt(0).toUpperCase()+us.body.slice(1)}</p>

                            <FDiv>
                                <div>
                                    <img src="./media/icons/ecosystem.svg" alt=""></img>
                                    <p>Subsid. corp.</p>
                                    &bull;
                                </div>
                                <div>
                                    <img src="./media/icons/entities2.svg" alt=""></img>
                                    <p>Corporate</p>
                                    &bull;
                                </div>
                                <div>
                                    <p>{us.email}</p>
                                </div>
                            </FDiv>
                        </MainBlocks>
                    )}): posts.filter((us: any) => {
                        if(us.name.toLowerCase().includes(inputText.toLowerCase())){
                            return us
                        }else{
                            return null;
                        }
                    }).map((us: any) =>{
                        return(
                            <MainBlocks key={us.id}>
                                <h3>{us.name.charAt(0).toUpperCase()+us.name.slice(1)}</h3>

                                <p>{us.body.charAt(0).toUpperCase()+us.body.slice(1)}</p>

                                <FDiv>
                                    <div>
                                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                                        <p>Subsid. corp.</p>
                                        &bull;
                                    </div>
                                    <div className="Corp">
                                        <img src="./media/icons/entities2.svg" alt=""></img>
                                        <p>Corporate</p>
                                        &bull;
                                    </div>
                                    <div>
                                        <p>{us.email}</p>
                                    </div>
                                </FDiv>
                            </MainBlocks>
                        )
                    })
                }
            </WorkContainer>
            <ReactPaginate
                previousLabel={'PREVIOUS'}
                nextLabel={'NEXT'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={posts.length}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page'}
                previousClassName={'previous'}
                nextClassName={'next'}
            />
        </WrapperR>
    );
};