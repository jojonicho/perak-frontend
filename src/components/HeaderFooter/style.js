import styled from "styled-components";

export const HeaderFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  h2 {
    margin: auto;
  }
  .footer {
    position: absolute;
    height: 40px;

    p {
      margin: auto;
      margin-left: 10px;
      font-size: 0.8rem;
    }
  }
  .no-decor {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .header {
    position: fixed;
    height: 60px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }

  .logo {
    height: 40px;
  }
  .header,
  .footer {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .childcontainer {
    padding-top: 60px;
  }
  .no-padding-top {
    padding-top: 0px;
  }
  .daftar {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1em;
    color: #e5e6de;
    transform: translateY(+100%);
  }
.menu-bar{
  display:flex;
  flex-direction:row;
}
.dropdown{
  padding-left:25px;
  padding-right:25px;
  position:relative;
  display:inline-block;
  height:60px
}
.dropdown-menu{
  display:none;
  flex-direction:row;
  width:max-content;
  background-color:rgba(7,21,46,0.94);
  margin:-right:50px;
  margin-left:50px;
  padding:20px;
}
.dropdown-menu-klasemen{
  margin-left:0px
}
.dropdown:hover .dropdown-menu-klasemen{
  right:0%!important;
}
.dropdown-col-klasemen{
  width:130px!important;
}
.dropdown:hover .dropdown-menu{
  display:flex;
  position:absolute;
  right:-50%;
  top:100%;
}
.dropdown:hover{
  background-color:rgba(7,21,46,1);
}
.dropdown-col{
  display:flex;
  flex-direction:column;
  width:45%;
}
.dropdown-col-left{
  border-right-width:2px;
  border-right-style:solid;
  border-right-color:gray;
}

.button-menu{
  margin:15px;
  color:#E5E6DE;
  text-align:center;
}
.dropdown-item{
  margin-left:auto;
  margin-right:auto;
}
  @media only screen and (max-width: 350px) {
    .logo {
      height: 35px;
    }
  }
`;
