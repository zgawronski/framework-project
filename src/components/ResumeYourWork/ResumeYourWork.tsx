import { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';


const WrapperR = styled(Wrapper)`
    display: block;
    position: relative;
    width: 970px;
    margin: 10px;
    padding: 0;
`;


const MainTitle = styled.h1`
    margin-left: 5px;
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
    border-radius: 10px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};
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

const WorkContainer = styled.div``;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
    }
    div{
        display:flex;
    }
`;

export const ResumeYourWork: FC = () => {
    const apiURL = `https://jsonplaceholder.typicode.com/comments/`;
    const [posts, setPosts] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [inputText, setInputText] = useState<any>("");
    const [inputSearchActive, setInputSearchActive] = useState<number>(1);

    useEffect(()=> {

        fetch(apiURL)
        .then(res=> res.json())
        .then(data => setPosts(data))

    }, [apiURL]);

    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    //const lastPage: number = posts.length / postsPerPage;

    //const paginate = (pageNumber:number) => pageNumber>=1 && pageNumber <= lastPage ? setCurrentPage(pageNumber) : console.log("error");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const text:string = e.target.value;
        setInputText(text);

        if(text !== ""){
            setInputSearchActive(0);
        }else{
            setInputSearchActive(1);
        }
    }

    return (
        <WrapperR>
            <TitleContainer>
                <MainTitle>Resume your work</MainTitle>
                <SearchDiv>
                    <CustomInput type="text" placeholder="Filter by title..." value={inputText} onChange={inputHandler}></CustomInput>
                    <img src="./media/icons/search.svg" alt=""/>
                </SearchDiv>
                <FollowDiv>
                    <p>Followed</p>
                    <img src="./media/icons/arrow-down.svg" alt=""/>
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

                                <div className="flowDiv">
                                    <div className="Subside">
                                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                                        <p>Subsid. corp.</p>
                                    </div>
                                    <div className="Corp">
                                        <img src="./media/icons/entities2.svg" alt=""></img>
                                        <p>Corporate</p>
                                    </div>
                                    <div className="Updated">
                                        <p>{us.email}</p>
                                    </div>
                                </div>
                            </MainBlocks>
                        )})}
            {/* {
               inputSearchActive ? <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} pageLast={lastPage}></Pagination> : null
            } */}

            </WorkContainer>
        </WrapperR>

    );
};