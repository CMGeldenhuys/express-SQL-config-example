module.exports = {
    allTrips : 'SELECT * FROM Ablb_Fisher_Trip__c LIMIT ?',
    tripsFor : 'SELECT * FROM Ablb_Fisher_Trip__c WHERE main_fisher_id__c = ? LIMIT ?'
}