import React from 'react';

class Helper 
{
    static getUrgencyName(urgencyNum) {
        switch(urgencyNum) {
            case 0: return <span className="badge badge-info">Baixa</span>
            case 1: return <span className="badge badge-warning">Média</span>
            case 2: return <span className="badge badge-danger">Alta</span>
        }
    }
}

export default Helper