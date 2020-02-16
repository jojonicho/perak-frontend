import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import Klasemen from "../../components/Klasemen";
import HeaderFooter from "../../components/HeaderFooter";
import { KlasemenPageContainer } from "./style";

const KlasemenPage = props => {
  const { id } = props;
  const [state, setState] = useState({ type: null, loading: true });
  useEffect(() => {
    setState({ type: id, loading: false });
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
                <Klasemen id={1} isFutsal />
                <Klasemen id={2} isFutsal />
                <Klasemen id={3} isFutsal />
                <Klasemen id={4} isFutsal />
              </>
            ) : (
              <>
                {state.type === "dota" ? (
                  <>
                    <Klasemen id={10} />
                    <Klasemen id={11} />
                    <Klasemen id={12} />
                  </>
                ) : (
                  <>
                    {state.type === "csgo" ? (
                      <>
                        <Klasemen id={7} />
                        <Klasemen id={8} />
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
