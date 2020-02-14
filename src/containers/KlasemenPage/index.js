import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import Klasemen from "../../components/Klasemen";
import HeaderFooter from "../../components/HeaderFooter";
import { KlasemenPageContainer } from "./style";

const KlasemenPage = props => {
  const [state, setState] = useState({ type: null, loading: true });
  useEffect(() => {
    setState({ type: props.match.params.type, loading: false });
  }, [setState]);
  return (
    <HeaderFooter color="dark">
      <KlasemenPageContainer>
        {state.loading ? (
          <h1 className="title">KLASEMEN FASE GROUP </h1>
        ) : (
          <>
            <h1 className="title">
              KLASEMEN FASE GROUP {state.type.toUpperCase()}
            </h1>
            {state.type === "futsal" ? (
              <>
                <Klasemen id={1} />
                <Klasemen id={2} />
                <Klasemen id={3} />
                <Klasemen id={4} />
              </>
            ) : (
              <>
                {state.type === "dota" ? (
                  <>
                    <Klasemen id={5} />
                    <Klasemen id={6} />
                  </>
                ) : (
                  <>
                    {state.type === "csgo" ? (
                      <>
                        <Klasemen id={5} />
                        <Klasemen id={6} />
                      </>
                    ) : (
                      <Redirect to="/" />
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </KlasemenPageContainer>
    </HeaderFooter>
  );
};

export default KlasemenPage;
