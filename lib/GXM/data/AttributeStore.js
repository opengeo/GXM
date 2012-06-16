/*
 * Copyright (c) 2008-2012 The Open Source Geospatial Foundation
 *
 * Published under the BSD license.
 * See https://github.com/geoext/geoext2/blob/master/license.txt for the full text
 * of the license.
 */

/*
 * @include GeoExt/data/AttributeModel.js
 */

/**
 * A store to work with DescribeFeatureType responses. This is a regular
 * Ext store preconfigured with a {@link GeoExt.data.AttributeModel}.
 *
 *
 * Example:
<pre><code>
Ext.create('GeoExt.data.AttributeStore', {
    ignore: {type: 'xsd:string'},
    url: 'http://host.wfsdescribefeaturetype'
});
</code></pre>
 */
Ext.define('GXM.data.AttributeStore', {
    extend: 'GXM.data.OwsStore',
    requires: ['GXM.data.models.Attribute'],
    config: {
        /** api: config[model]
         * 
         *  ``String`` The identifier for the model to be used. 
         *  Defaults to ``gxm_attribute``.
         */
        model: 'GXM.data.models.Attribute',
        /**
         * @cfg {Object} ignore
         * The ignore object passed to the reader.
         */
        ignore: null
    },

    /**
     * @private
     */
/*    constructor: function(config) {
        config = Ext.apply({}, config);
        // At this point, we have to copy the complex objects from the config
        // into the prototype. This is because Ext.data.Store's constructor 
        // creates deep copies of these objects.
        var data;
        // if we have a feature AND data, then we need to remove the data so that
        // the reader is not called before it is ready. We load the data in the
        // store AFTER the store & its dependent objects have been constructed
        if (config.data) {
            data = config.data;
            delete config.data;
        }

        this.callParent([config]);

        if (data) {
            this.setData(data);
        }
    },
*/
    /**
     * @private
     * We're setting the ignore property in the reader.
     * @param {Object} ignore
     */
    applyIgnore: function(ignore) {
        var reader = this.getProxy().getReader();
        if(reader) { reader.setIgnore(ignore); }
    }
});
