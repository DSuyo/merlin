import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './sales.reducer';
import { ISales } from 'app/shared/model/sales.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISalesDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const SalesDetail = (props: ISalesDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { salesEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="merlinApp.sales.detail.title">Sales</Translate> [<b>{salesEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="state">
              <Translate contentKey="merlinApp.sales.state">State</Translate>
            </span>
          </dt>
          <dd>{salesEntity.state}</dd>
        </dl>
        <Button tag={Link} to="/sales" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/sales/${salesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ sales }: IRootState) => ({
  salesEntity: sales.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SalesDetail);
