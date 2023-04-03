import React, { useContext, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { useMainContext } from '../../../utils/GlobalState'
import { ADD_TICKET, SET_PURCHASE } from '../../../utils/mutations';
import { QUERY_USER, GET_PURCHASE } from '../../../utils/queries';

const Success = () => {
  const [addTicket, { error, data:addTdata }] = useMutation(ADD_TICKET, {
    refetchQueries: [{ query: QUERY_USER }]
  });
  const [setPurchase] = useMutation(SET_PURCHASE);
  const { currentPurchase } = useMainContext();

  const { loading, error: queryError, data: queryData } = useQuery(GET_PURCHASE);

  useEffect(() => {
    if (queryData && queryData.event) {
      try {
        addTicket({ 
          variables: {
            event: queryData.event._id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
   
  }, [queryData, currentPurchase, addTicket, setPurchase]);

  if (loading) {
    return <h1>Loading UserHome...</h1>;
  }
  if (queryError) {
    console.log(queryError);
    return <h1>Error: {queryError.message}</h1>;
  }

  return (
    <div>
      <h2>Thank you for your purchase.</h2>
      <h2>You may view your new ticket on the ticket page.</h2>
    </div>
  );
}

export default Success;