import React from 'react';
import PropTypes from 'prop-types';
import AccountItem from '~/components/AccountItem';

function AccountList({ data }) {
  return (
    <>
      {data.map((account, index) => (
        <AccountItem key={index} data={account} />
      ))}
    </>
  );
}

AccountList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AccountList;
