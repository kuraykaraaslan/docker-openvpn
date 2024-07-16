// IPTableRule.tsx
import { DataTypes } from 'sequelize';
import sequelize from '../libs/database';

/*
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination  
*/

enum Chain {
    INPUT = 'INPUT',
    FORWARD = 'FORWARD',
    OUTPUT = 'OUTPUT'
}

enum Target {
    ACCEPT = 'ACCEPT',
    DROP = 'DROP'
}

const IPTableRule = sequelize.define('ip_table_rules', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chain: {
        type: DataTypes.ENUM(Chain.INPUT, Chain.FORWARD, Chain.OUTPUT),
        defaultValue: Chain.INPUT,
        allowNull: true
    },
    target: {
        type: DataTypes.ENUM(Target.ACCEPT, Target.DROP),
        defaultValue: Target.DROP,
        allowNull: true
    },
    prot: {
        type: DataTypes.STRING,
        allowNull: true
    },
    opt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    source: {
        type: DataTypes.STRING,
        allowNull: true
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

export default IPTableRule;