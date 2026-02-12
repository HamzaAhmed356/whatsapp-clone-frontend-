import { Search as SearchIcon } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  padding: 5px 7px;
`;
const Wrapper = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  background-color: #f0f2f5;
  padding: 8px;
  border-radius: 8px;
`;

const Icon = styled(Box)`
  position: absolute;
  height:100%
  padding: 8px;
  color: #919191;
  
`;
const InputField = styled(InputBase)`
  padding: 10px;
  padding-left: 65px;
  height: 25px;
  font-size: 14px;
`;
const Search = ({ text }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputField
          placeholder="Search Conversation here"
          onChange={(e) => {
            text(e.target.value);
          }}
        />
      </Wrapper>
    </Component>
  );
};
export default Search;
